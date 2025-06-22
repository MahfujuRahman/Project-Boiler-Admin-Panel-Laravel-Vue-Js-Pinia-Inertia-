<?php

namespace App\Modules\Management\Testing\Actions;

class UpdateData
{
    static $model = \App\Modules\Management\Testing\Models\Model::class;

    public static function execute($request, $slug)
    {
         dd(request()->all());
        try {
            if (!$data = self::$model::query()->where('slug', $slug)->first()) {
                return messageResponse('Data not found...', $data, 404, 'error');
            }

            $requestData = $request->validated();

            if ($request->hasFile('picture')) {
                $image = $request->file('picture');
                $requestData['picture'] = uploader($image, 'uploads/pictures');
            }

            $data->update($requestData);
            return messageResponse('Item updated successfully', $data, 201);
        } catch (\Exception $e) {
            return messageResponse($e->getMessage(), [], 500, 'server_error');
        }
    }
}
